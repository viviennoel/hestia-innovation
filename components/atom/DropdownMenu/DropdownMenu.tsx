import Dropdown from 'react-bootstrap/Dropdown';

export const DropdownMenu = () => {
    return(
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        Menu
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    )
}