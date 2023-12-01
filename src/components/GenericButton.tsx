interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

export const GenericButton: React.FC<ButtonProps>
    = ({ children, ...props }) => {
        return (<button {...props} 
            className={`from-green-500 to-green-600 bg-gradient-to-br hover:from-green-600 hover:to-green-700 rounded-2xl p-6`}
        >
            {children}
        </button>)
    }