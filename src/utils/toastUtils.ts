export function showErrorToast(message: string, targetId?: string) {
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.top = "20px";
    container.style.left = "50%";
    container.style.transform = "translateX(-50%)";
    container.style.backgroundColor = "#f44336"; // red
    container.style.color = "white";
    container.style.padding = "12px 20px";
    container.style.borderRadius = "4px";
    container.style.fontSize = "14px";
    container.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
    container.style.zIndex = "9999";
    container.style.fontFamily = "Arial, sans-serif";
    container.innerText = message;
  
    document.body.appendChild(container);
  
    // Remove after 4 seconds
    setTimeout(() => {
      container.remove();
    }, 4000);
  
    // Optional: also display message in the target element
    if (targetId) {
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.innerHTML = `<div style="color: red; font-family: Arial; font-size: 14px; padding: 8px 0;">${message}</div>`;
      }
    }
  }