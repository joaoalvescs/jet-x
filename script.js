// Carregar configuração
fetch(chrome.runtime.getURL("config.json"))
  .then((response) => response.json())
  .then((config) => {
    const chatbotContainer = document.getElementById("chatbot-container");

    // Criar o iframe com a URL do chatbot
    const iframe = document.createElement("iframe");
    iframe.src = config.chatbotIframeUrl;
    iframe.width = "400px";
    iframe.style.height = "400px";
    iframe.style.minHeight = "700px";
    iframe.style.border = "none"; // Substitui frameBorder

    // Adicionar o iframe ao container
    chatbotContainer.appendChild(iframe);
  })
  .catch((error) => console.error("Erro ao carregar a configuração:", error));
