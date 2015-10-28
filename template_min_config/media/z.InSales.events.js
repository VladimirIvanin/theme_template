// ================================================================================================
//                                      EVENT BUS
// ================================================================================================

// реализуем шину событий для модулей
//
// идея заключается в том, что все кастомные события обрабатываются как $.deferred
// как следствие - вне зависимости от порядка объявления слушателей события и вызова самого события,
// все привязанные слушатели сработают даже если они были привязаны после срабатывания события
//
// id    - название события
// flags - набор флагов, регулирующие логику работы подкписки, подробнее в доке jQuery
//         всегда добавляйте memory, иначе не гарантируется корректная работа шины

Events = function( id, flags ){
  var
    callbacks,
    Event = id && EventsList[ id ];

  flags = flags || 'memory';

  if( !Event ){
    callbacks = jQuery.Callbacks( flags );
    Event = {
      publish:     callbacks.fire,
      subscribe:   callbacks.add,
      unsubscribe: callbacks.remove
    };
    if( id ){
      EventsList[ id ] = Event;
    }
  }

  return Event;
};