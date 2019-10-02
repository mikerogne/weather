class Storage {
    constructor(zip) {
        this.zip;
        this.defaultZip = '64701';
    }

    getLocationData() {

        this.zip = localStorage.getItem('zip') ? localStorage.getItem('zip') : this.defaultZip;
        return {
            zip: this.zip
        }
    }

    setLocationData(zip) {
        localStorage.setItem('zip', zip);
    }
}