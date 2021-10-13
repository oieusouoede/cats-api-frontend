import styled from "styled-components"
import { Container, Button, Header, Table } from "semantic-ui-react"
import FormModal from "./components/FormModal"
import { getCats, rmCat } from "../../api/CatsApiBackend"
import { useEffect, useState } from "react"

const TableDiv = styled(Container)`

    &&{
        background-color: rgba(255, 255, 255, 0.3);
        width: 750px;
        max-height: 500px;
        padding: 30px;
        overflow-y: auto;
    }

`

function DatabasePage () {

    const [cats, setCats] = useState([]) 

    useEffect(() => {
        async function fetchData() {
          const data = await getCats()
          setCats(data)
        }
        fetchData()
    }, [])

    function deleteData(id) {
        rmCat(id)
        
    }
    
    const renderData = () => {
        return cats.map((cat) => (
            <Table.Row key={cat.id}>
                <Table.Cell>{cat.id}</Table.Cell>
                <Table.Cell>{cat.name}</Table.Cell>
                <Table.Cell>{cat.age}</Table.Cell>
                <Table.Cell>{cat.pastime}</Table.Cell>
                <Table.Cell>
                    <Button 
                        onClick={() => {deleteData(cat.id)}}
                        floated='right'
                        color='red' 
                        size='small'>
                            Delete
                    </Button>
                </Table.Cell>
                <Table.Cell>
                    <FormModal 
                        catData={(cat)}
                    />
                </Table.Cell>
            </Table.Row>
        ))
    }

    return(
        <>    
            <TableDiv>
                <Header textAlign='center' as='h1'>Registered cats</Header>
                <Table size="large" basic="very" selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>ID</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Age</Table.HeaderCell>
                            <Table.HeaderCell>Pastime</Table.HeaderCell>
                            <Table.HeaderCell />
                            <Table.HeaderCell />
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {renderData()}
                    </Table.Body>
                    <Table.Footer >
                        <Table.Row>
                        <Table.HeaderCell />
                        <Table.HeaderCell colSpan="5">
                            <FormModal/>
                        </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
            </TableDiv>   
        </>
    )
}
            
export default DatabasePage