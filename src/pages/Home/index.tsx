import  { Play } from 'phosphor-react'
import  { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod' // hookForm faz a integração da zod
import * as zod from 'zod' // fazer essa importação apenas quando não existir um export default

import { 
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  TaskInput,
  StartCountdownButton
} from './styles'

const newCycleFormValidatinSchema = zod.object({
  task: zod.string().min(2, 'Informe a tarefa'),
  minutesAmount: zod.number()
    .min(5, 'O ciclo precisa ser de no minimo 5 minutos')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos')
})

/*
interface NewCycleFormData {
  task: string
  minutesAmount: number
}
*/

type NewCycleFormData = zod.infer<typeof newCycleFormValidatinSchema>

export function Home () {
  const {register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidatinSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0
    }
  })

  const handleCreateNewCycle = (dado: any) => {
    console.log(dado)
    reset();
  }

  const task = watch('task') //controlled /  uncontrolled
  //const minutesAmount = watch('minutesAmount')
  const isSubmitDisabled = !task

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