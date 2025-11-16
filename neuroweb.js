document.getElementById('Button').addEventListener('click', async () => {
    try {
        const port = await navigator.serial.requestPort();
        await port.open({ baudRate: 115200 });

        const reader = port.readable.getReader();
        const buttonToClick = document.getElementById('alertButton'); 

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const decoder = new TextDecoder();
            const data = decoder.decode(value);
            console.log(data);

            
            if (data.trim() === '1') {
                alert("Tu as navigué sur ce site avec ton esprit...");
            }
        }

        reader.releaseLock();
    } catch (error) {
        console.error("Error: ", error);
    }
});
