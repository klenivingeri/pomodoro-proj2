import  { Play } from 'phosphor-react'
import  { useForm } from 'react-hook-form'
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, TaskInput, StartCountdownButton } from './styles'

//controlled /  uncontrolled

export function Home () {
  const {register, handleSubmit, watch } = useForm()

  const handleCreateNewCycle = (dado: any) => {
    console.log(dado)
  }
  
  const task = watch('task')
  const minutesAmount = watch('minutesAmount')
  const isSubmitDisabled = !task || !minutesAmount

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list='task-suggestions'
            placeholder='Dê um nome para seu projeto'
            {...register('task')}
            />
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
            {...register('minutesAmount', { valueAsNumber: true})}
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

        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size="24" />Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}