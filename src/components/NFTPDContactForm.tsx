'use client';

import { useEffect, useRef } from 'react';

export default function NFTPDContactForm() {
    const containerRef = useRef<HTMLDivElement>(null);
    const formSlug = "nftpd-contact-security-inquiry-99d013a8";

    useEffect(() => {
        if (!containerRef.current) return;

        // Check if form already exists to prevent duplicate injection
        if (containerRef.current.querySelector('form')) return;

        const apiEndpoint = "/api/forms/submit";

        // NFTPD Security Theme
        const theme = {
            primaryColor: "#3B82F6",
            backgroundColor: "rgba(59, 130, 246, 0.03)", // Subtle blue glass
            textColor: "#ffffff",
            borderColor: "rgba(59, 130, 246, 0.2)",
            borderRadius: "16px",
            fontFamily: "inherit",
            buttonTextColor: "#ffffff",
            labelColor: "#9ca3af", // gray-400
            inputBgColor: "rgba(0, 0, 0, 0.3)"
        };

        const form = document.createElement("form");
        form.id = "crm-form-" + formSlug;
        form.style.cssText = `display:grid; grid-template-columns: repeat(12, 1fr); column-gap: 20px; row-gap: 24px; width:100%; max-width:800px; margin:0 auto; font-family:${theme.fontFamily}; background:${theme.backgroundColor}; padding:40px; border-radius:${theme.borderRadius}; border: 1px solid ${theme.borderColor}; backdrop-filter: blur(10px);`;

        const fields = [
            { name: "first_name", label: "First Name", type: "text", required: true, placeholder: "Satoshi", span: 6 },
            { name: "last_name", label: "Last Name", type: "text", required: true, placeholder: "Nakamoto", span: 6 },
            { name: "email", label: "Email", type: "email", required: true, placeholder: "you@company.com", span: 6 },
            { name: "phone", label: "Phone", type: "phone", required: false, placeholder: "+1 415 555 0123", span: 6 },
            { name: "company", label: "Company / Project Name", type: "text", required: false, placeholder: "Your DAO, protocol, or project", span: 12 },
            { name: "website", label: "Project Website or Repo", type: "text", required: false, placeholder: "https://yourproject.xyz", span: 12 },
            { name: "interested_services", label: "Interested Services", type: "multi_select", required: true, placeholder: null, span: 12 },
            { name: "message", label: "Project Details", type: "textarea", required: true, placeholder: "Briefly describe your project, chain(s), codebase links, scope, timeline, and any incidents.", span: 12 }
        ];

        const allInputs: (HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement)[] = [];

        fields.forEach(function (field, index) {
            const wrapper = document.createElement("div");
            wrapper.style.gridColumn = `span ${field.span || 12}`;
            wrapper.style.display = "flex";
            wrapper.style.flexDirection = "column";

            const label = document.createElement("label");
            label.textContent = field.label + (field.required ? " *" : "");
            label.style.cssText = "display:block;margin-bottom:8px;font-weight:600;color:" + theme.labelColor + ";font-size:12px;letter-spacing: 0.05em;text-transform:uppercase;";
            wrapper.appendChild(label);

            let input: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

            if (field.type === "textarea") {
                input = document.createElement("textarea");
                input.rows = 5;
            } else if (field.type === "multi_select") {
                input = document.createElement("select");
                input.multiple = true;
                input.setAttribute('size', '6');

                const options = [
                    "NFT Security Audit",
                    "Smart Contract Review",
                    "Chain Blacklist Integration",
                    "Protocol Security Assessment",
                    "Incident Response",
                    "Security Training & Consultation"
                ];

                options.forEach(opt => {
                    const el = document.createElement("option");
                    el.text = opt;
                    el.value = opt;
                    el.style.backgroundColor = "#1a1a1a";
                    el.style.color = theme.textColor;
                    el.style.padding = "8px";
                    input.appendChild(el);
                });
            } else {
                input = document.createElement("input");
                input.type = field.type === "email" ? "email" : field.type === "phone" ? "tel" : "text";
            }

            input.name = field.name;
            // Don't set required on multi-select as it doesn't work well with HTML5 validation
            if (field.type !== 'multi_select') {
                input.required = field.required;
            }
            if (input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement) {
                input.placeholder = field.placeholder || "";
            }

            // Input Styling
            input.style.cssText = `width:100%;padding:14px 16px;border:1px solid ${theme.borderColor};border-radius:8px;font-size:14px;background:${theme.inputBgColor};color:${theme.textColor};box-sizing:border-box;outline:none;transition:all 0.2s ease;`;

            input.onfocus = () => {
                input.style.borderColor = theme.primaryColor;
                input.style.background = "rgba(0,0,0,0.5)";
            };
            input.onblur = () => {
                input.style.borderColor = theme.borderColor;
                input.style.background = theme.inputBgColor;
            };

            allInputs.push(input);
            wrapper.appendChild(input);

            // Add helper text for multi-select
            if (field.type === 'multi_select') {
                const helperText = document.createElement('span');
                helperText.textContent = 'Hold Ctrl (or Cmd) to select multiple services';
                helperText.style.cssText = `display:block;margin-top:6px;font-size:11px;color:${theme.labelColor};opacity:0.7;font-style:italic;`;
                wrapper.appendChild(helperText);
            }

            form.appendChild(wrapper);
        });

        // Submit Button
        const submitWrapper = document.createElement("div");
        submitWrapper.style.gridColumn = "span 12";

        const submit = document.createElement("button");
        submit.type = "submit";
        submit.textContent = "SUBMIT INQUIRY";
        submit.style.cssText = `background:${theme.primaryColor};color:${theme.buttonTextColor};border:none;padding:16px 28px;border-radius:8px;cursor:pointer;font-size:14px;font-weight:700;width:100%;letter-spacing:0.1em;text-transform:uppercase;transition:opacity 0.2s;`;

        submit.onmouseover = () => { submit.style.opacity = "0.9"; };
        submit.onmouseout = () => { submit.style.opacity = "1"; };

        submitWrapper.appendChild(submit);
        form.appendChild(submitWrapper);

        // Submit Handler
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            // Custom validation for multi-select
            const interestedServices = form.querySelector('select[name="interested_services"]') as HTMLSelectElement;
            if (interestedServices && interestedServices.selectedOptions.length === 0) {
                alert("Please select at least one service you're interested in.");
                return;
            }

            submit.disabled = true;
            submit.textContent = "SUBMITTING...";
            submit.style.opacity = "0.7";

            const data: Record<string, any> = {};
            const formData = new FormData(form);

            // Handle multi-select specially
            if (interestedServices && interestedServices.multiple) {
                data['interested_services'] = Array.from(interestedServices.selectedOptions).map(opt => opt.value);
            }

            formData.forEach(function (v, k) {
                if (k !== 'interested_services') {
                    data[k] = v;
                }
            });

            console.log('Submitting form data:', data);

            fetch(apiEndpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    form_slug: formSlug,
                    data: data,
                    source_url: window.location.href,
                    referrer: document.referrer
                })
            })
                .then(async (response) => {
                    console.log('Response status:', response.status);
                    const result = await response.json();
                    console.log('Response data:', result);

                    if (response.ok) {
                        form.innerHTML = `<div style='grid-column:span 12;text-align:center;padding:60px;'><h3 style='color:${theme.primaryColor};font-size:24px;margin-bottom:12px;font-weight:bold;'>INQUIRY RECEIVED</h3><p style='color:${theme.textColor};opacity:0.8;'>Thank you for your submission! Our security team will review your request and respond shortly.</p></div>`;
                        return;
                    }
                    throw new Error(result.error || "Submission error");
                })
                .catch(function (error) {
                    console.error('Form submission error:', error);
                    alert("Submission failed. Please try again. Check console for details.");
                    submit.disabled = false;
                    submit.textContent = "SUBMIT INQUIRY";
                    submit.style.opacity = "1";
                });
        });

        containerRef.current.appendChild(form);
    }, []);

    return <div id={"form-" + formSlug} ref={containerRef} className="w-full" />;
}
