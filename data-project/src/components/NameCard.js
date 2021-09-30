import { useState, useEffect } from 'react'

const NameCard = ({ name, color }) => {

    const [bgColor, setBGColor] = useState()
    const [txtColor, setTxtColor] = useState()

    const styleLogic = (colorString) => {
        switch (colorString) {
            case 'red':
                setBGColor('#FFB6C1')
                setTxtColor('#B22222')
                break;

            case 'orange':
                setTxtColor('#E65410')
                setBGColor('#F5DEB3')
                break;

            case 'yellow':
                setBGColor('#FAFAD2')
                setTxtColor('#DAA520')
                break;

            case 'green':
                setBGColor('#66CDAA')
                setTxtColor('#006400')
                break;

            case 'blue':
                setTxtColor('#024566')
                setBGColor('#A3E1FF')
                break;

            case 'indigo':
                setTxtColor('#002566')
                setBGColor('#B0C4DE')
                break;

            case 'violet':
                setTxtColor('#2E0166')
                setBGColor('#E2C2FC')
                break;

            default:
                setBGColor('#7F7F7F')
                setTxtColor('#FFFFFF')
                break;
        }
    }

    useEffect(() => {
        return styleLogic(color)
    }, [color])
    

    return (
        <div className='name-card'>
            <div className='name' style={{ backgroundColor: bgColor, color: txtColor }}>{name}</div>
        </div>
    )



}
export default NameCard
