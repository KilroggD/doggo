class ApiService {
    /**
     * Service function to avoid repetition of fetch everywhere
     * @param {string} url - url to fetch
     * @param {string} method - method get or post
     */
    async apiCall(url, method = 'GET') {
        let payload = {
            method,
            mode: 'cors',
            headers: this.buildHeaders(),
        };

        const res = await fetch(url, payload);
        const status = res.status;
        if (status === 204) {
            return { status };
        }
        const body = await res.json();
        return { status, body };
    }

    /**
     * Build  http headers object
     */
    buildHeaders() {
        let headers = new Headers();
        headers.append('Content-type', 'application/json');
        return headers;
    }

    /**
     * Throw common error on not successful status
     * @param {object} response
     */
    handleCommonError(response) {
        if (![200, 201, 204].includes(response.status)) {
            throw new Error(response.status);
        }
    }

    async getDogPicture() {
        const res = await this.apiCall('/woof.json/');
        this.handleCommonError(res);
        return res.body.url;
    }
}

export default new ApiService();
