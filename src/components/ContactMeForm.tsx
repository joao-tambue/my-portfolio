'use client';

import { useState } from 'react';
import { PaperPlaneRightIcon } from '@phosphor-icons/react';

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 2000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[600px] bg-[#292C34] rounded-[8px] p-6 space-y-4 shadow-lg border border-gray-700"
    >
      {submitted && (
        <p className="p-3 rounded-md bg-green-500/10 text-green-400 border border-green-500/20">
          ✅ Mensagem enviada com sucesso!
        </p>
      )}

      {/* Nome + Email na mesma linha */}
      <div className="flex items-center gap-2 flex-col sm:flex-row">
        <div className="w-full">
          <label className="block text-gray-300 mb-1">Nome</label>
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-[#2A2A2A] text-white rounded-lg border border-transparent focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
          />
        </div>

        <div className="w-full">
          <label className="block text-gray-300 mb-1">E-mail</label>
          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-[#2A2A2A] text-white rounded-lg border border-transparent focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
          />
        </div>
      </div>

      {/* Companhia */}
      <div>
        <label className="block text-gray-300 mb-1">Companhia ( Opcional )</label>
        <input
          type="text"
          name="company"
          placeholder="Nome da empresa"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-[#2A2A2A] text-white rounded-lg border border-transparent focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
        />
      </div>

      {/* Mensagem */}
      <div>
        <label className="block text-gray-300 mb-1">Mensagem</label>
        <textarea
          rows={4}
          name="message"
          placeholder="Escreva sua mensagem..."
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-[#2A2A2A] text-white rounded-lg border border-transparent focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 resize-none"
        ></textarea>
      </div>

      {/* Botão */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
        {!isSubmitting && <PaperPlaneRightIcon size={20} weight="fill" />}
      </button>
    </form>
  );
}
