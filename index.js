function setupEditableField(target, initialText) {
    const container = document.createElement('div');
    const textArea = document.createElement('textarea');
    const saveButton = document.createElement('button');
    const cancelButton = document.createElement('button');
    
    saveButton.textContent = 'Save';
    cancelButton.textContent = 'Cancel';

    container.appendChild(textArea);
    container.appendChild(saveButton);
    container.appendChild(cancelButton);

    container.classList.add('editable-container');
    target.innerHTML = '';
    target.appendChild(container);

    textArea.value = initialText;

    saveButton.addEventListener('click', function() {
        target.textContent = textArea.value;
    });

    cancelButton.addEventListener('click', function() {
        target.textContent = initialText;
    });
}

function handleTableClick(event) {
    const clickedElement = event.target;
    if (clickedElement.tagName === 'TH') {
        const originalText = clickedElement.textContent;
        setupEditableField(clickedElement, originalText);
    }
}

const tableElement = document.querySelector('table');
tableElement.addEventListener('click', handleTableClick);
