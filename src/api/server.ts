const token = '522dfdc0e9f3fa4b272be38638e16c89cba5f35da4fea49c'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://handsomely-deadpan-sleet.glitch.me/api/whiskeys`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://handsomely-deadpan-sleet.glitch.me/api/whiskeys`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(data)
        })
        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://handsomely-deadpan-sleet.glitch.me/api/whiskeys/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(data)
        })

        if (!response.ok){
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch(`https://handsomely-deadpan-sleet.glitch.me/api/whiskeys/${id}`,
        {  
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
            },
        })

        if (!response.ok){
            throw new Error('Failed to delete data on server')
        }

        return;
    },
}