interface CardProps {
    className: string;
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children }) => {
    return(
        <div className="card-component">
            <div className={`card-container ${className}`}>{children}</div>
        </div>    
    );
};

export default Card;