import  { Play } from 'phosphor-react'
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, TaskInput, StartCountdownButton } from './styles'

export function Home () {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput id="task" list='task-suggestions' placeholder='Dê um nome para seu projeto' />
          <datalist id="task-suggestions">
            <option value="value 1"></option>
            <option value="value 2"></option>
            <option value="value 3"></option>
            <option value="value 4"></option>
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput 
            type="number" 
            id="minutesAmount"
            placeholder='00'
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
          
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled={true} type="submit">
          <Play size="24" />Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}