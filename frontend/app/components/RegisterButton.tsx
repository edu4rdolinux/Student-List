interface Props {
    ButtonText: string;
}

const RegisterButton: React.FC<Props> = ({ ButtonText }) => {
    return (
        <button 
            type="submit" 
            className="max-w-lg bg-blue-500 hover:bg-blue-600 text-white p-2 rounded transition w-full"
        >
            {ButtonText}
        </button>
    );
}

export default RegisterButton;
