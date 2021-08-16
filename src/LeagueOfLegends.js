const API_BASE = 'http://ddragon.leagueoflegends.com/cdn/11.16.1/data/en_US/champion.json'

const allChampions = async () => {
    const req = await fetch(API_BASE)
    const json = await req.json()
    const filterData = Object.values(json.data)
    return filterData
}

const filterClassChampions = async (tag) => {
    const req = await fetch(API_BASE)
    const json = await req.json()
    const filterData = Object.values(json.data).filter(p => p.tags[0] === tag)
    return filterData
}

export default {
    getAllChampionsList: async () => {
        return [
            {
                items: await allChampions()
            }
        ]
    },
    getClassChampionList: async () => {
        return [
            {
                title: 'Fighters',
                items: await filterClassChampions('Fighter')
            },
            {
                title: 'Mages',
                items: await filterClassChampions('Mage')
            },
            {
                title: 'Marksmans',
                items: await filterClassChampions('Marksman')
            },
            {
                title: 'Supports',
                items: await filterClassChampions('Support')
            },
            {
                title: 'Assassins',
                items: await filterClassChampions('Assassin')
            },
            {
                title: 'Tanks',
                items: await filterClassChampions('Tank')
            }
        ]
    }
}