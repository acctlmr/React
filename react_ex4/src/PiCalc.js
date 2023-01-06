import pi from './mathpi';

import { doublePi,triplePi } from './mathpi';

const PiCalc = () => {

    return(
        <div>
            <h1>{pi}</h1>
            <h2>{doublePi()}</h2>
            <h3>{triplePi()}</h3>

        </div>
    )
}
export default PiCalc;