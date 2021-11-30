export function loadScript(url , async) {
    let resolver = null;
  
    const onloadPromise = new Promise((resolve) => {
      resolver = resolve;
    });
  
    const script = document.createElement("script");
    script.src = url;
    if (async) {
      script.async = true;
    }
    script.onload = () => resolver();
    document.body.appendChild(script);
  
    return onloadPromise;
  }