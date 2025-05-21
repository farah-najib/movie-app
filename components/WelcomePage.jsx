//  WelcomePage som kombinerar Greeting och NameSetter

import Greeting from './Greeting'
import NameSetter from './NameSetter'

const WelcomePage = () => {
    return (
        <div>
            <Greeting name="Linnea" />
            <NameSetter />
        </div>
    )
}

export default WelcomePage
