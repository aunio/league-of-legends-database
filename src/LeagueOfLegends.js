const API_BASE = 'http://ddragon.leagueoflegends.com/cdn/11.16.1/data/en_US/champion.json'

const filterTag = async (tag) => {
    const req = await fetch(API_BASE)
    const json = await req.json()
    const filterData = Object.values(json.data).filter(p => p.tags[0] === tag)
    return filterData
}

export default {
    getHomeList: async () => {
        return [
            {
                tag: 'marksman',
                title: 'Marksman',
                items: await filterTag('Marksman')
            },
            {
                tag: 'support',
                title: 'Support',
                items: await filterTag('Support')
            },
        ]
    }
}