import "./Instructions.scss";
export default function Instructions() {
    return (
        <div className="instructions">
            <p className="instructions__title">How to use:</p>
                <ul className="instructions__list">
                    <li className="instructions__list-item"><span className="instructions__list-item--underlined">Write your answer</span> to the following exercise and click <span className="instructions__list-item--bold">Verify</span>.</li>
                    <li className="instructions__list-item">Click <span className="instructions__list-item--bold">Shuffle</span> to generate new a exercise.</li>
                    <li className="instructions__list-item">To customize the exercise, click on the <span className="instructions__list-item--bold">dropdown menus</span>, and <span className="instructions__list-item--bold">select</span>/<span className="instructions__list-item--bold">unselect</span> elements for shuffle.</li>
                    <li className="instructions__list-item">Click on edit icon <i className="bi bi-pencil-square"></i> to change verb list.</li>
                </ul>
        </div>
    )    
}