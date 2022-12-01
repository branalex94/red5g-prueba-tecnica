export default function ActionsButton({ text, warning = false, onClick = null }) {
	return (
		<button 
			onClick={onClick && onClick}
      className={`footer__actions-options__button ${warning ? "warning" : ""}`}>
       {text}
    </button>
	)
}