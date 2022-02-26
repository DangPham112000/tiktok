import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";


function Paragraph() {

    const context = useContext(ThemeContext);

    console.log(context)

    return (
        <div className={context.theme}>
            absdakjncansc
            absdakjncanscd
            absdakjncansca
            sd
        </div>
    )
}

export default Paragraph;