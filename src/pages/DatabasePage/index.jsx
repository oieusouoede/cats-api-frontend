import styled from "styled-components"
import { useCatStore } from "../../storage/cat"
import { Container, Button, Header, Table } from "semantic-ui-react"
import FormModal from "./components/FormModal"

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

    const cats  = useCatStore((state) => state.cats)
    const rmCat = useCatStore((state) => state.rmCat)

    const renderData = () => {
        return cats.map((cat) => (
            <Table.Row key={cat.id}>
                <Table.Cell>{cat.id}</Table.Cell>
                <Table.Cell>{cat.name}</Table.Cell>
                <Table.Cell>{cat.age}</Table.Cell>
                <Table.Cell>{cat.pastime}</Table.Cell>
                <Table.Cell>
                    <Button 
                        onClick={() => {rmCat(cat.id)}}
                        floated='right'
                        color='red' 
                        size='small'>
                            Delete
                    </Button>
                </Table.Cell>
                <Table.Cell>
                    <FormModal 
                        idValue={(cat.id)}
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