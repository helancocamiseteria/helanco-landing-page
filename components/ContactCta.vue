<template>
  <section id="contato" class="section" style="background: var(--bg);">
    <div class="container">
      <div style="display:grid; gap:2.5rem; grid-template-columns: 1fr; align-items:center;">
        <div style="text-align: center; max-width: 65ch; margin: 0 auto;">
          <h2 style="font-size: clamp(1.75rem, 4vw, 2.5rem); margin-bottom: .75rem;">Pronto para Criar Sua Próxima Coleção?</h2>
          <p style="font-size: 1.05rem; color: var(--text); margin-bottom: 2rem;">Entre em contato conosco. Respondemos rápido!</p>
          
          <!-- Botões de Contato -->
          <div style="display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap; max-width: 500px; margin: 0 auto;">
            <a 
              href="https://wa.me/5561982050818?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Helanco" 
              target="_blank" 
              rel="noopener" 
              class="contact-button whatsapp-button"
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>WhatsApp</span>
            </a>
            
            <a 
              href="mailto:helancocamiseteria@gmail.com" 
              class="contact-button email-button"
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>E-mail</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- FORMULÁRIO EMAILJS COMENTADO POR QUESTÕES DE SEGURANÇA COM VERCEL
  <section id="contato" class="section" style="background: var(--bg);">
    <div class="container">
      <div style="display:grid; gap:2.5rem; grid-template-columns: 1fr; align-items:start;">
        <div style="text-align: center; max-width: 65ch; margin: 0 auto;">
          <h2 style="font-size: clamp(1.75rem, 4vw, 2.5rem); margin-bottom: .75rem;">Pronto para Criar Sua Próxima Coleção?</h2>
          <p style="font-size: 1.05rem; color: var(--text);">Conte-nos sobre o que você deseja. Respondemos rápido!</p>
        </div>
        <div style="max-width: 600px; margin: 0 auto; width: 100%;">
          <form @submit.prevent="handleSubmit" class="card" style="background: var(--bg); padding: 2rem;">
            
            <!‒ Success Message ->
            <div v-if="submitSuccess" class="success-message" style="margin-bottom: 1.5rem; padding: 1rem; border-radius: .6rem; background: rgba(34, 197, 94, 0.1); border: 1px solid rgba(34, 197, 94, 0.3); color: #22c55e;">
              <div style="display: flex; gap: .75rem; align-items: start;">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" style="flex-shrink: 0; margin-top: 2px;">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <div>
                  <strong style="display: block; margin-bottom: .25rem;">Mensagem enviada com sucesso!</strong>
                  <span style="font-size: .95rem; opacity: 0.9;">Entraremos em contato em breve.</span>
                </div>
              </div>
            </div>

            <!‒ Error Message ->
            <div v-if="submitError" class="error-message" style="margin-bottom: 1.5rem; padding: 1rem; border-radius: .6rem; background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); color: #ef4444;">
              <div style="display: flex; gap: .75rem; align-items: start;">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" style="flex-shrink: 0; margin-top: 2px;">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                </svg>
                <div>
                  <strong style="display: block; margin-bottom: .25rem;">Erro ao enviar</strong>
                  <span style="font-size: .95rem; opacity: 0.9;">{{ submitError }}</span>
                </div>
              </div>
            </div>

            <div style="display:grid; gap:1.25rem;">
              <!‒ Honeypot field (invisible to humans, bots will fill it) ->
              <div style="position: absolute; left: -9999px; opacity: 0; pointer-events: none;">
                <label>
                  Leave this field empty
                  <input 
                    type="text" 
                    v-model="honeypot"
                    name="website"
                    tabindex="-1"
                    autocomplete="off"
                  />
                </label>
              </div>

              <label>
                <div class="muted" style="margin-bottom:.5rem; font-weight: 600;">Nome</div>
                <input 
                  type="text" 
                  v-model="formData.name"
                  placeholder="Seu nome" 
                  :disabled="isSubmitting"
                  :class="{ 'input-error': errors.name && touched.name }"
                  style="width:100%; padding:.9rem 1rem; border-radius:.6rem; border:1px solid var(--color-grey-700); background: var(--surface); color: var(--text); font-size: 1rem; transition: border-color 0.2s;" 
                />
                <span v-if="errors.name && touched.name" class="error-text" style="display: block; margin-top: .5rem; font-size: .875rem; color: #ef4444;">{{ errors.name }}</span>
              </label>
              <label>
                <div class="muted" style="margin-bottom:.5rem; font-weight: 600;">E-mail Profissional</div>
                <input 
                  type="email" 
                  v-model="formData.email"
                  placeholder="voce@marca.com" 
                  :disabled="isSubmitting"
                  :class="{ 'input-error': errors.email && touched.email }"
                  style="width:100%; padding:.9rem 1rem; border-radius:.6rem; border:1px solid var(--color-grey-700); background: var(--surface); color: var(--text); font-size: 1rem; transition: border-color 0.2s;" 
                />
                <span v-if="errors.email && touched.email" class="error-text" style="display: block; margin-top: .5rem; font-size: .875rem; color: #ef4444;">{{ errors.email }}</span>
              </label>
              <label>
                <div class="muted" style="margin-bottom:.5rem; font-weight: 600;">Conte-nos sobre seu Projeto</div>
                <textarea 
                  v-model="formData.message"
                  placeholder="Descreva seu projeto, volumes esperados e prazos..." 
                  rows="5" 
                  :disabled="isSubmitting"
                  :class="{ 'input-error': errors.message && touched.message }"
                  style="width:100%; padding:.9rem 1rem; border-radius:.6rem; border:1px solid var(--color-grey-700); background: var(--surface); color: var(--text); font-size: 1rem; resize: vertical; transition: border-color 0.2s;"
                ></textarea>
                <span v-if="errors.message && touched.message" class="error-text" style="display: block; margin-top: .5rem; font-size: .875rem; color: #ef4444;">{{ errors.message }}</span>
              </label>
              <button 
                class="button primary" 
                type="submit" 
                :disabled="isSubmitting"
                style="padding: 1rem 1.5rem; font-size: 1.05rem; position: relative;"
              >
                <span v-if="!isSubmitting">Enviar Consulta</span>
                <span v-else style="display: flex; align-items: center; justify-content: center; gap: .5rem;">
                  <svg class="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" stroke-width="3" stroke-opacity="0.25"/>
                    <path d="M12 2a10 10 0 0 1 10 10" stroke-width="3" stroke-linecap="round"/>
                  </svg>
                  Enviando...
                </span>
              </button>
              
              <div style="text-align: center; margin-top: 1rem;">
                <div class="muted" style="margin-bottom: .75rem; font-weight: 600;">Ou entre em contato diretamente:</div>
                <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                  <a href="https://wa.me/5561982050818?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Helanco" target="_blank" rel="noopener" class="button ghost" style="display: inline-flex; align-items: center; gap: .5rem;">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    WhatsApp
                  </a>
                  <a href="mailto:helancocamiseteria@gmail.com" class="button ghost" style="display: inline-flex; align-items: center; gap: .5rem;">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    E-mail
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  -->
</template>

<script setup lang="ts">
// COMENTADO POR QUESTÕES DE SEGURANÇA COM VERCEL
// const { 
//   formData, 
//   errors,
//   touched,
//   isSubmitting, 
//   submitSuccess, 
//   submitError,
//   isFormValid,
//   submitForm
// } = useContactForm()

// const honeypot = ref('')

// const handleSubmit = async () => {
//   await submitForm(honeypot.value)
// }
</script>

<style scoped>
.contact-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.25rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 0.6rem;
  text-decoration: none;
  transition: all 0.2s ease;
  flex: 1;
  min-width: 200px;
  border: 1px solid transparent;
}

.contact-button svg {
  flex-shrink: 0;
}

.whatsapp-button {
  background: linear-gradient(135deg, var(--color-yellow), var(--color-copper) 50%, var(--color-gold));
  color: #0f0f0f;
  border-color: rgba(0,0,0,.25);
  box-shadow: 0 4px 14px rgba(212,132,62,0.35);
}

.whatsapp-button:hover {
  filter: brightness(1.05);
}

.email-button {
  background: transparent;
  color: var(--text);
  border-color: var(--color-grey-700);
}

.email-button:hover {
  filter: brightness(1.05);
}

.contact-button:focus {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}

@media (max-width: 640px) {
  .contact-button {
    min-width: 100%;
    padding: 1.1rem 1.5rem;
    font-size: 1rem;
  }
}

/* ESTILOS COMENTADOS DO FORMULÁRIO EMAILJS
.input-error {
  border-color: #ef4444 !important;
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  filter: grayscale(0.3);
}

.spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.success-message,
.error-message {
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
*/
</style>
