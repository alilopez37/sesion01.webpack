const configuration = require('../../configServer')
const debug = configuration.debugMode

class APIInvoker {

    getAPIHeader(){
        return({
            'Content-Type': 'application/json',
            authorization: window.localStorage.getItem('token')
        })
    }
    getAPIHeaderImg(){
        return({
            authorization: window.localStorage.getItem('token')
        })
    }

    invokeGET(url, okCallback, failCallback){
        let params = {
            method: 'GET',
            headers: this.getAPIHeader()
        }
        this.invoke(url,okCallback,failCallback,params)
    }

    invokePUT(url, body, okCallback, failCallback){
        let params = {
            method: 'PUT',
            headers: this.getAPIHeader(),
            body: JSON.stringify(body)
        }
        this.invoke(url,okCallback,failCallback,params)
    }

    invokePOST(url, body, okCallbak, failCallback){
        let params = {
            method: 'POST',
            headers: this.getAPIHeader(),
            body: JSON.stringify(body)
        }

        this.invoke(url,okCallbak,failCallback,params)
    }
    ///----
    invokePOSTimg(url, body, okCallbak, failCallback){
        let params = {
            method: 'POST',
            headers: this.getAPIHeaderImg(),
            body: body
        }

        this.invoke(url,okCallbak,failCallback,params)
    }
    ////----
    invokeDELETE(url, body, okCallbak, failCallback){
        let params = {
            method: 'DELETE',
            headers: this.getAPIHeader(),
        }

        this.invoke(url,okCallbak,failCallback,params)
    }

    invoke(url,okCallback, failCallback,params){
        if (debug) {
            console.log('Invoke => ' + params.method + ':' + url)
            console.log (params.body)
        }
        fetch(`${configuration.api.host}${url}`,params)
            .then(response => {
                if (debug){
                    console.log('Invoke Response =>')
                    console.log (response)
                }
                return response.json()
            })
            .then(data => {
                if (data.status)
                    okCallback(data)
                else
                    failCallback(data)
            })
            .catch(error => {
                console.log("Error: " +error)
            })
    }
}

export default new APIInvoker();