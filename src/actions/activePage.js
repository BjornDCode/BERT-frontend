import{ SET_ACTIVE_PAGE, SET_ACTIVE_DASHBOARD_COMPONENT } from './types';

export function setActivePage(title) {
    return {
        type: SET_ACTIVE_PAGE,
        title
    }
}

export function setActiveDashboardComponent(title) {
    return {
        type: SET_ACTIVE_DASHBOARD_COMPONENT,
        title
    }
}
