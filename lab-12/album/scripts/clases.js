
// Clase Album: el álbum tiene una lista de miniaturas y una vista modal
class Album {
    constructor() {
        this.miniaturas = [];
        this.modalScreen = new ModalScreen();
    }

    // Mostrar miniaturas
    showThumbnails() {
        const albumView = document.querySelector('#album-view');
        for (let i = 0; i < PHOTO_LIST.length; i++) {
            const photoSrc = PHOTO_LIST[i];
            const miniatura = new Miniatura(photoSrc);
            const image = miniatura.createImage();
            image.addEventListener('click', this.thumbnailControl.bind(this));
            albumView.appendChild(image);
            this.miniaturas.push(miniatura);
        }
    }

    thumbnailControl(event) {
        const miniatura = event.target;
        
        // Se crea la foto modal
        this.modalScreen.photo = new ModalPhoto(miniatura.src);
        const image = this.modalScreen.photo.obtener();
        // Se muestra la vista modal con la foto seleccionada
        document.body.classList.add('no-scroll');
        this.modalScreen.modalView.style.top = window.pageYOffset + 'px';
        this.modalScreen.modalView.appendChild(image);
        this.modalScreen.modalView.classList.remove('hidden');
    }
}

// Clase Miniatura: lista de miniaturas
class Miniatura {
    constructor(src) {
        this.src = src;
    }

    createImage() {
        const image = document.createElement('img');
        image.src = this.src;
        return image;
    }
}

// Clase de la vista modal: la vista modal tiene una foto modal
class ModalScreen {
    constructor() {
        this.modalView = document.querySelector('#modal-view');
        this.modalView.addEventListener('click', this.onModalClick.bind(this));
        this.photo = null;
    }

    onModalClick() {
        document.body.classList.remove('no-scroll');
        this.modalView.classList.add('hidden');
        this.modalView.innerHTML = '';
    }
}

// Clase de la foto modal
class ModalPhoto {
    constructor(src) {
        this.src = src;
    }

    obtener() {
        const image = document.createElement('img');
        image.src = this.src;
        image.classList.add('modal-photo');
        
        return image;
    }

    
} 

