import { getImageUrl } from '../../utils';
import styles from './ProjectCard.module.css';
import projects from '../../data/projects.json';

export const ProjectCard = ({ project : { title, imageSrc, description, skills, source } }) => {
  return (
    <div className={styles.container}>
    <img src={getImageUrl(imageSrc)} alt={ projects.imageAltPrefix + title} className={styles.image} />
    <h3 className={styles.image} >{title}</h3>
    <p className={styles.description}>{description}</p>
    <ul className={styles.skills}>
        {
            skills.map((skill, id) => {
                return (<li key={id} className={styles.skill}>{skill}</li>)
            })
        }
    </ul>
    <div className={styles.links}>
        <a className={styles.link} href={source}>{projects.sourceLabel}</a>
    </div>
</div>
  )
}
