import styled from "styled-components"
import { useCatStore } from "../../../storage/cat"
import { Button, Checkbox, Header, Icon, Table } from "semantic-ui-react"

const Container = styled.div`

    &&{
        width: 800px;
        height: 90%;

    }

`

const DataTable = styled(Table)`

    tbody > tr:hover {
        background-color: #4b4b4b;
    }

`

const ListComponent = () => {

    const cats  = useCatStore((state) => state.cats)

    const renderData = () => {
        return cats.map((cat) => (
            <Table.Row>
                <Table.Cell collapsing>
                    <Checkbox/>
                </Table.Cell>
                <Table.Cell>{cat.id}</Table.Cell>
                <Table.Cell>{cat.name}</Table.Cell>
                <Table.Cell>{cat.age}</Table.Cell>
                <Table.Cell>{cat.pastime}</Table.Cell>
            </Table.Row>
        ))
    }

    return (
    <Container className="ui container">
    <Header size='huge'>Registered cats</Header>
    <DataTable color='black' inverted>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell></Table.HeaderCell>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Age</Table.HeaderCell>
                <Table.HeaderCell>Pastime</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {renderData()}
        </Table.Body>
        <Table.Footer className="full-widTable.HeaderCell">
            <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell colspan="4">
                <Button
                    floated='right'
                    icon
                    labelPosition='left'
                    primary
                    size='small'>
                    <Icon name='plus square'/> Add Cat
                </Button>
                <Button size='small'>Delete</Button>
                <Button size='small'>Update</Button>
            </Table.HeaderCell>
            </Table.Row>
        </Table.Footer>
    </DataTable>
    </Container>
    )
}

export default ListComponent