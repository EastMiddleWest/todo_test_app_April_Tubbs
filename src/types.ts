export type ToDo = {
  id: string
  content: string
  completed: boolean
}

export enum FilterOptions  {
  All =  "All",
  Completed = 'Completed',
  Current = 'Current'
}

