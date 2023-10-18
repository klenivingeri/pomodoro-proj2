import styles from './Button.module.css'

interface ButtonsProps {
    color: 'primary' | 'secundary' | 'danger' | 'success';
}

export const Button = ({ color = 'primary'}: ButtonsProps) => {
    return <button className={`${styles.button} ${styles[color]}`}>{color}</button>
}
