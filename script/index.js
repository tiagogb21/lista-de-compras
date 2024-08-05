const listContainer = document.querySelector("#list-container");
const iptSearch = document.querySelector("#ipt-search");
const btnSearch = document.querySelector("#btn-search");

btnSearch.addEventListener('click', handleAddItem);

function handleAddItem() {
    const itemContent = iptSearch.value.trim();

    if (itemContent) {
        const listItem = createListItem(itemContent);
        listContainer.appendChild(listItem);
        iptSearch.value = "";
    }
}

function createListItem(content) {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    const paragraph = document.createElement('p');
    const removeButton = createRemoveButton();

    checkbox.setAttribute('type', 'checkbox');

    paragraph.innerText = content;
    paragraph.classList.add('paragraph');

    listItem.appendChild(checkbox);
    listItem.appendChild(paragraph);
    listItem.appendChild(removeButton);

    const uniqueId = `item-${Date.now()}`;
    listItem.setAttribute('data-id', uniqueId);

    removeButton.addEventListener('click', () => handleRemoveItem(uniqueId));

    return listItem;
}

function createRemoveButton() {
    const button = document.createElement('button');
    const img = document.createElement('img');

    img.setAttribute('src', './assets/icons/garbage.svg');
    button.appendChild(img);

    return button;
}

function handleRemoveItem(itemId) {
    const itemToRemove = document.querySelector(`[data-id="${itemId}"]`);

    if (itemToRemove) {
        itemToRemove.remove();
    }
}
