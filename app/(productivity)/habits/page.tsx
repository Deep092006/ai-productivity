import HabitsDashboard from '@/features/habits/main/HabitsDashboard'
import { getuser } from '@/lib/actions/getuser'

const HabitsPage = async () => {
  const userId = await getuser()
  return <HabitsDashboard user_id={userId ?? ""} />
}

export default HabitsPage
