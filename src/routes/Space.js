import styles from './Space.module.css';

const Space = () => {
    return (
        <div className={styles.Background}>
            <body className={styles.Header}>
                <h1>Interesting Images by NASA</h1>
                <p>These pictures are from NASA missions/operations with the Hubble Space Telescope</p>
            </body>

            <div className={styles.Content}>
            <div className={styles.Wrapper}>
            <body>
                <h4 className={styles.SubHeader}>Hubble's View of a Dense Star Cluster</h4>
                <div className={styles.Center}><img src={process.env.PUBLIC_URL + '/star_cluster.jpg'} className={styles.Photo} alt="star cluster"/></div>
                <p className={styles.Paragraph}>"The teeming stars of the globular cluster NGC 6544... This cluster of tightly bound stars lies more than 8,000 light-years away from Earth and is, like all globular clusters, a densely populated region of tens of thousands of stars."</p>
                <p className={styles.Credits}>Credits: ESA/Hubble & NASA, W. Lewin, F. R. Ferraro</p>
            </body>

            <body>
                <h4 className={styles.SubHeader}>Hubble's View of a Trinary of Stars</h4>
                <div className={styles.Center}><img src={process.env.PUBLIC_URL + '/trinary_stars.jpg'} className={styles.Photo} alt="star cluster"/></div>
                <p className={styles.Paragraph}>"A trio of dazzling stars blaze from the hollowed-out cavity of a reflection nebula... The triple-star system is made up of the variable star HP Tau, HP Tau G2, and HP Tau G3."</p>
                <p className={styles.Credits}>Credits: NASA, ESA, G. Duchene (Universite de Grenoble I); Image Processing: Gladys Kober (NASA/Catholic University of America)</p>
            </body> 

            <body>
                <h4 className={styles.SubHeader}>Hubble Maintenance Mission</h4>
                <div className={styles.Center}><img src={process.env.PUBLIC_URL + '/hubble.png'} className={styles.Photo} alt="star cluster"/></div>
                <p className={styles.Paragraph}>"Jeffrey A. Hoffman signals directions to European Space Agency (ESA) astronaut Claude Nicollier, as Nicollier controls the Remote Manipulator System arm during the third of five extravehicular activities of the Hubble Space Telescope's first servicing mission in December 1993."</p>
                <p className={styles.Credits}>Credits: NASA</p>
            </body> 
            </div>
            </div>
            <body className={styles.Header}>
                <p><br></br></p>
            </body>
        </div>
    );
};

export default Space;
