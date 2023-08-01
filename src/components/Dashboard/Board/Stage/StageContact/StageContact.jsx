import { Contact, ContactImg, ContactName } from './StageContact.styled'

const StageContact = ({ img, name }) => {
    return (
        <Contact>
            <ContactImg src={img} alt={name} />
            <ContactName>{name}</ContactName>
        </Contact>
    )
}

export default StageContact
