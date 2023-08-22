import axios from "axios";

type DBRowType = {
    id: string,
    title: string,
    description: string,
    type: string,
    complete: boolean,
    date: string,
}

export default function Home() {
    async function getDB() {
        const {data} = await axios.get<DBRowType[]>('http://localhost:4000/rows')
        return data
    }

    return <main>
        <div>
            <text>{"notion DB ABC"}</text>
            {getDB().then(rows =>{
                return rows.map(row =>{
                    return <div>
                        <text>{row.title}</text>
                    </div>
                })
            })}
        </div>
    </main>
}
