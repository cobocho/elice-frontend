/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * Mix&Mingle API
 * 
Mix&Mingle API Server

 * OpenAPI spec version: 0.2.0
 */
import {
  useMutation,
  useQuery
} from '@tanstack/react-query'
import type {
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import type {
  ApiEventsEventIdGrouppingPost200,
  EventCreateRequest,
  EventGroupingRequest,
  EventResponse,
  EventUpdateRequest,
  HTTPValidationError
} from '../api.schemas'
import { customInstance } from '../../utils/axios';
import type { ErrorType, BodyType } from '../../utils/axios';


type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];


/**
 * 이벤트 목록을 조회합니다.
 * @summary 이벤트 목록 조회
 */
export const apiEventsGet = (
    
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<EventResponse[]>(
      {url: `/api/events`, method: 'GET', signal
    },
      options);
    }
  

export const getApiEventsGetQueryKey = () => {
    return [`/api/events`] as const;
    }

    
export const getApiEventsGetQueryOptions = <TData = Awaited<ReturnType<typeof apiEventsGet>>, TError = ErrorType<unknown>>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof apiEventsGet>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getApiEventsGetQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof apiEventsGet>>> = ({ signal }) => apiEventsGet(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof apiEventsGet>>, TError, TData> & { queryKey: QueryKey }
}

export type ApiEventsGetQueryResult = NonNullable<Awaited<ReturnType<typeof apiEventsGet>>>
export type ApiEventsGetQueryError = ErrorType<unknown>


export function useApiEventsGet<TData = Awaited<ReturnType<typeof apiEventsGet>>, TError = ErrorType<unknown>>(
  options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof apiEventsGet>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof apiEventsGet>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useApiEventsGet<TData = Awaited<ReturnType<typeof apiEventsGet>>, TError = ErrorType<unknown>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof apiEventsGet>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof apiEventsGet>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useApiEventsGet<TData = Awaited<ReturnType<typeof apiEventsGet>>, TError = ErrorType<unknown>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof apiEventsGet>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }
/**
 * @summary 이벤트 목록 조회
 */

export function useApiEventsGet<TData = Awaited<ReturnType<typeof apiEventsGet>>, TError = ErrorType<unknown>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof apiEventsGet>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getApiEventsGetQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * 이벤트를 생성합니다.
 * @summary 이벤트 생성
 */
export const apiEventsPost = (
    eventCreateRequest: BodyType<EventCreateRequest>,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<EventResponse>(
      {url: `/api/events`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: eventCreateRequest
    },
      options);
    }
  


export const getApiEventsPostMutationOptions = <TError = ErrorType<HTTPValidationError>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof apiEventsPost>>, TError,{data: BodyType<EventCreateRequest>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof apiEventsPost>>, TError,{data: BodyType<EventCreateRequest>}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof apiEventsPost>>, {data: BodyType<EventCreateRequest>}> = (props) => {
          const {data} = props ?? {};

          return  apiEventsPost(data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type ApiEventsPostMutationResult = NonNullable<Awaited<ReturnType<typeof apiEventsPost>>>
    export type ApiEventsPostMutationBody = BodyType<EventCreateRequest>
    export type ApiEventsPostMutationError = ErrorType<HTTPValidationError>

    /**
 * @summary 이벤트 생성
 */
export const useApiEventsPost = <TError = ErrorType<HTTPValidationError>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof apiEventsPost>>, TError,{data: BodyType<EventCreateRequest>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof apiEventsPost>>,
        TError,
        {data: BodyType<EventCreateRequest>},
        TContext
      > => {

      const mutationOptions = getApiEventsPostMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * 이벤트를 조회합니다.
 * @summary 이벤트 조회
 */
export const apiEventsEventIdGet = (
    eventId: number,
 options?: SecondParameter<typeof customInstance>,signal?: AbortSignal
) => {
      
      
      return customInstance<EventResponse>(
      {url: `/api/events/${eventId}`, method: 'GET', signal
    },
      options);
    }
  

export const getApiEventsEventIdGetQueryKey = (eventId: number,) => {
    return [`/api/events/${eventId}`] as const;
    }

    
export const getApiEventsEventIdGetQueryOptions = <TData = Awaited<ReturnType<typeof apiEventsEventIdGet>>, TError = ErrorType<HTTPValidationError>>(eventId: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof apiEventsEventIdGet>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getApiEventsEventIdGetQueryKey(eventId);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof apiEventsEventIdGet>>> = ({ signal }) => apiEventsEventIdGet(eventId, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(eventId), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof apiEventsEventIdGet>>, TError, TData> & { queryKey: QueryKey }
}

export type ApiEventsEventIdGetQueryResult = NonNullable<Awaited<ReturnType<typeof apiEventsEventIdGet>>>
export type ApiEventsEventIdGetQueryError = ErrorType<HTTPValidationError>


export function useApiEventsEventIdGet<TData = Awaited<ReturnType<typeof apiEventsEventIdGet>>, TError = ErrorType<HTTPValidationError>>(
 eventId: number, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof apiEventsEventIdGet>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof apiEventsEventIdGet>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useApiEventsEventIdGet<TData = Awaited<ReturnType<typeof apiEventsEventIdGet>>, TError = ErrorType<HTTPValidationError>>(
 eventId: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof apiEventsEventIdGet>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof apiEventsEventIdGet>>,
          TError,
          TData
        > , 'initialData'
      >, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }
export function useApiEventsEventIdGet<TData = Awaited<ReturnType<typeof apiEventsEventIdGet>>, TError = ErrorType<HTTPValidationError>>(
 eventId: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof apiEventsEventIdGet>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey }
/**
 * @summary 이벤트 조회
 */

export function useApiEventsEventIdGet<TData = Awaited<ReturnType<typeof apiEventsEventIdGet>>, TError = ErrorType<HTTPValidationError>>(
 eventId: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof apiEventsEventIdGet>>, TError, TData>>, request?: SecondParameter<typeof customInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } {

  const queryOptions = getApiEventsEventIdGetQueryOptions(eventId,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * 이벤트를 수정합니다.
 * @summary 이벤트 수정
 */
export const apiEventsEventIdPut = (
    eventId: number,
    eventUpdateRequest: BodyType<EventUpdateRequest>,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<EventResponse>(
      {url: `/api/events/${eventId}`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: eventUpdateRequest
    },
      options);
    }
  


export const getApiEventsEventIdPutMutationOptions = <TError = ErrorType<HTTPValidationError>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof apiEventsEventIdPut>>, TError,{eventId: number;data: BodyType<EventUpdateRequest>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof apiEventsEventIdPut>>, TError,{eventId: number;data: BodyType<EventUpdateRequest>}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof apiEventsEventIdPut>>, {eventId: number;data: BodyType<EventUpdateRequest>}> = (props) => {
          const {eventId,data} = props ?? {};

          return  apiEventsEventIdPut(eventId,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type ApiEventsEventIdPutMutationResult = NonNullable<Awaited<ReturnType<typeof apiEventsEventIdPut>>>
    export type ApiEventsEventIdPutMutationBody = BodyType<EventUpdateRequest>
    export type ApiEventsEventIdPutMutationError = ErrorType<HTTPValidationError>

    /**
 * @summary 이벤트 수정
 */
export const useApiEventsEventIdPut = <TError = ErrorType<HTTPValidationError>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof apiEventsEventIdPut>>, TError,{eventId: number;data: BodyType<EventUpdateRequest>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof apiEventsEventIdPut>>,
        TError,
        {eventId: number;data: BodyType<EventUpdateRequest>},
        TContext
      > => {

      const mutationOptions = getApiEventsEventIdPutMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * 이벤트를 삭제합니다.
 * @summary 이벤트 삭제
 */
export const apiEventsEventIdDelete = (
    eventId: number,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<void>(
      {url: `/api/events/${eventId}`, method: 'DELETE'
    },
      options);
    }
  


export const getApiEventsEventIdDeleteMutationOptions = <TError = ErrorType<HTTPValidationError>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof apiEventsEventIdDelete>>, TError,{eventId: number}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof apiEventsEventIdDelete>>, TError,{eventId: number}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof apiEventsEventIdDelete>>, {eventId: number}> = (props) => {
          const {eventId} = props ?? {};

          return  apiEventsEventIdDelete(eventId,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type ApiEventsEventIdDeleteMutationResult = NonNullable<Awaited<ReturnType<typeof apiEventsEventIdDelete>>>
    
    export type ApiEventsEventIdDeleteMutationError = ErrorType<HTTPValidationError>

    /**
 * @summary 이벤트 삭제
 */
export const useApiEventsEventIdDelete = <TError = ErrorType<HTTPValidationError>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof apiEventsEventIdDelete>>, TError,{eventId: number}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof apiEventsEventIdDelete>>,
        TError,
        {eventId: number},
        TContext
      > => {

      const mutationOptions = getApiEventsEventIdDeleteMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * 이벤트에 속한 참여자 그룹핑합니다.
 * @summary 이벤트 참여자 그룹핑
 */
export const apiEventsEventIdGrouppingPost = (
    eventId: number,
    eventGroupingRequest: BodyType<EventGroupingRequest>,
 options?: SecondParameter<typeof customInstance>,) => {
      
      
      return customInstance<ApiEventsEventIdGrouppingPost200>(
      {url: `/api/events/${eventId}/groupping`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: eventGroupingRequest
    },
      options);
    }
  


export const getApiEventsEventIdGrouppingPostMutationOptions = <TError = ErrorType<HTTPValidationError>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof apiEventsEventIdGrouppingPost>>, TError,{eventId: number;data: BodyType<EventGroupingRequest>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof apiEventsEventIdGrouppingPost>>, TError,{eventId: number;data: BodyType<EventGroupingRequest>}, TContext> => {
const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof apiEventsEventIdGrouppingPost>>, {eventId: number;data: BodyType<EventGroupingRequest>}> = (props) => {
          const {eventId,data} = props ?? {};

          return  apiEventsEventIdGrouppingPost(eventId,data,requestOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type ApiEventsEventIdGrouppingPostMutationResult = NonNullable<Awaited<ReturnType<typeof apiEventsEventIdGrouppingPost>>>
    export type ApiEventsEventIdGrouppingPostMutationBody = BodyType<EventGroupingRequest>
    export type ApiEventsEventIdGrouppingPostMutationError = ErrorType<HTTPValidationError>

    /**
 * @summary 이벤트 참여자 그룹핑
 */
export const useApiEventsEventIdGrouppingPost = <TError = ErrorType<HTTPValidationError>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof apiEventsEventIdGrouppingPost>>, TError,{eventId: number;data: BodyType<EventGroupingRequest>}, TContext>, request?: SecondParameter<typeof customInstance>}
): UseMutationResult<
        Awaited<ReturnType<typeof apiEventsEventIdGrouppingPost>>,
        TError,
        {eventId: number;data: BodyType<EventGroupingRequest>},
        TContext
      > => {

      const mutationOptions = getApiEventsEventIdGrouppingPostMutationOptions(options);

      return useMutation(mutationOptions);
    }
    