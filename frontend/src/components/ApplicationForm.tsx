"use client";

import React, { useState } from 'react';
import { API_URL } from '@/lib/api';
import { useT } from '@/lib/i18n';
import "./ApplicationForm.css";

export const ApplicationForm: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const t = useT();

    const submitMessage = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setLoading(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        const data = {
            name: formData.get("name"),
            phone: formData.get("phone"),
            email: formData.get("email"),
        };

        try {
            const response = await fetch(`${API_URL}/send-message`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert(t("cta_success"));
                form.reset();
            } else {
                alert(t("cta_error"));
            }
        } catch {
            alert(t("cta_network"));
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="cta-form" onSubmit={submitMessage}>
            <input type="text" name="name" placeholder={t("cta_name")} required />
            <input type="tel" name="phone" placeholder={t("cta_phone")} required />
            <input type="email" name="email" placeholder={t("cta_email")} required />
            <button type="submit" disabled={loading}>
                {loading ? t("cta_sending") : t("cta_submit")}
            </button>
        </form>
    );
};
