import styles from './Space.module.css';

const Space = () => {
    return (
        <div>
            <body className={styles.Header}>
                <h1>Main Header</h1>
                <p>Subtext</p>
            </body>

            <body className={styles.Paragraph}>
                <h4>Header:</h4>
                <p>Text</p>
            </body>  
        </div>
    );
};

export default Space;