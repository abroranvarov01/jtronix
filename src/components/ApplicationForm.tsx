import React, { useState } from 'react';

export const ApplicationForm: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);

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
            // Отправляем запрос на наш внутренний API
            const response = await fetch('/api/send-message', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert("Заявка успешно отправлена!");
                form.reset();
            } else {
                alert("Ошибка сервера при отправке.");
            }
        } catch (error) {
            alert("Ошибка сети.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="cta-form" onSubmit={submitMessage}>
            <input type="text" name="name" placeholder="Ваше имя" required />
            <input type="tel" name="phone" placeholder="Ваш телефон" required />
            <input type="email" name="email" placeholder="Ваш Email" required />
            <button type="submit" disabled={loading}>
                {loading ? "Отправка..." : "Отправить запрос"}
            </button>
        </form>
    );
};