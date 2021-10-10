import styled from "styled-components"
import { useCatStore } from "../../../storage/cat"
import { Button, Header, Table } from "semantic-ui-react"
import FormModal from "./FormModal"

const Container = styled.div`

    &&{
        width: 600px;
        height: 90%;

    }

`

const ListComponent = () => {

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
                        headerText='Update cat'
                        buttonText='Update'
                    />
                </Table.Cell>
            </Table.Row>
        ))
    }

    return (
    <Container className="ui container">
    <Header size='huge'>Registered cats</Header>
    <Table color='black' inverted selectable>
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
                <FormModal
                    headerText='Register new cat'
                    buttonText='Add Cat'
                />
            </Table.HeaderCell>
            </Table.Row>
        </Table.Footer>
    </Table>
    </Container>
    )
}

export default ListComponent