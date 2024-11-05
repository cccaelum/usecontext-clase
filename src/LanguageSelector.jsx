import { useLanguage } from "./LanguageContext";

const LanguageSelector = () => {
    const {language, changeLanguage} = useLanguage();

    const handleChangeLang = (e) => {
        changeLanguage(e.target.value)
    }

    return (
        <>
            <label>Select language:</label>
            <select value={language} onChange={handleChangeLang}>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
            </select>
        </>
    )
}

export default LanguageSelector