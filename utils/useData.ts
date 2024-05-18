'use client';

import { useEffect, useState } from 'react';

import { arrCards, CardType } from '@/db/data';



interface Options {
    sortingBy: 'ASC' | 'DESC',
    skip?: boolean
}

// Дока ниже

export function useData<T> (typeSort: string, options: Options, data?: T): CardType[] | T[] | undefined {

    const { sortingBy, skip = false } = options

    const [ value, setValue ] = useState<CardType[] | T[]>()
    
    useEffect(() => {
       
    if(skip === false) {

        if(data) setValue(otherArrSorting())        
        else if(typeSort) setValue(sortingArr())

    } 

    }, [ typeSort, sortingBy, data, skip ])

    function sortingArr() {
        if(sortingBy === 'ASC') return arrCards.filter(({ type }) => {
        return type.find(type => type.includes(typeSort))
     })
        else if(sortingBy === 'DESC') return arrCards.filter(({ type }) => {
            return type.find(type => type.includes(typeSort))
        }).reverse()
    }

    function otherArrSorting() {
        if(Array.isArray(data))
         if(sortingBy === 'ASC') return data.filter((el: T | any) => el.type === typeSort)
         else if(sortingBy === 'DESC') return data.filter((el: T | any) => el.type === typeSort).reverse()
    }

    return value

} 

/*
  Хук используется для фильтрации статических и динамических данных

  Параметры:

  - По умолчанию:
    Хук принимает по умолчанию массив карточек с файла data.ts, 
    2 обязательных параметра: 
    по какому типу сортировать(важно чтобы в сущности было свойсто "type" с типом по которому вы хотите фильтровать) 
    и в каком порядке возвращать исходный массив("ASC" - исходный массив, "DESC" - перевёрнутый массив)

    Если нужна фильтрация базового массива(массива карточек), 
    то в джейнерик передаём заранее заготовленный тип CardType:

    import { CardType } from '@/db/data';
    
    useData<CardType>('new', { sortingBy: 'ASC' })

    Важно хук в базовой классификации возвращает тип массива карточек, 
    так что не надо передавать в джейнерик тип CardType[]
    
    - Если вы хотите отфильтровать другой массив: 

    Также имеет 2 обязательных параметра: 
    по какому типу сортировать(важно чтобы в сущности было свойсто "type" с типом по которому вы хотите фильтровать) 
    и в каком порядке возвращать исходный массив("ASC" - исходный массив, "DESC" - перевёрнутый массив)

    Но 3 параметром передаём другой исходный массив, в джейнерик записуем тип массива. Пример:

    interface TestArrType {
        id: number
        row: number
        type: string
    }

    const testArr = [ { id: 1, row: 3, type: 'house' }, { id: 2, row: 5, type: 'float' } ]

    const data = useData<TestArrType[]>('float', { sortingBy: 'DESC' }, testArr)

    - Если нужен пропуск сортировки, используйте свойтво skip: 
      при значение "true" - массив не фильтруется, при значение "false" - массив фильтруется

      const data = useData<CardType>('popular', { sortingBy: 'DESC', skip: true })

    Важно, чтобы сущность имело свойсто "type", иначе хук будет возвращать ошибку

*/ 