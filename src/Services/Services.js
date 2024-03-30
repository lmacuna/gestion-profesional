


const servicios = async (data, metodo, url, token) => {

    try {
        var res = await fetch(url, {
            method: metodo,
            body: data,
            headers: {
                //'Content-Type': 'application/json',   #CUANDO IMPLEMENTO FORMIK + YUP, PARA ENVIAR EL OBJETO UTILIZO ESTE FORMATO
                'Authorization': token
            },

        })

        res = await res.json()

        return res
    } catch (error) {
        if (error.code === 'ECONNRESET') {
            console.error("resetear error de conexion revisa tu servidor y el networking")
        } else {
            console.error(error.message)
        }
    }


}



export {servicios}