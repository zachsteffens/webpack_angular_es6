qprovider.$inject = [ '$qProvider' ];

export default function qprovider ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}
