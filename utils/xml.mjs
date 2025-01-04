export function escapeXMLCharacters(str) {
    const xmlEscapes = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;'
    };
    
    return str.replace(/[&<>"']/g, char => xmlEscapes[char]);
}

export function convertJsonToXML(obj, rootElement) {
    let xml = rootElement ? `<${rootElement}>` : "";
    
    for (const [key, value] of Object.entries(obj)) {
        if (Array.isArray(value)) {
            value.forEach(item => {
                xml += convertJsonToXML(item, key);
            });
        } else if (value && typeof value === "object") {
            xml += convertJsonToXML(value, key);
        } else {
            xml += `<${key}>${escapeXMLCharacters(String(value))}</${key}>`;
        }
    }
    
    return rootElement ? `${xml}</${rootElement}>` : xml;
}
