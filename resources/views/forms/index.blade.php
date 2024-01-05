@extends('sendportal::layouts.app')

@section('title', __('Forms'))

@section('heading')
    {{ __('Forms') }}
@endsection

@section('content')

    <script src="{{ asset('vendor/sendportal/build/assets/main.js') }}" type="javascript" ></script>
    @component('sendportal::layouts.partials.actions')
        @slot('right')
            <a class="btn btn-primary btn-md btn-flat" href="{{ route('sendportal.email_services.create') }}">
                <i class="fa fa-plus mr-1"></i> {{ __('Add Form') }}
            </a>
        @endslot
    @endcomponent

    <div id="app">
    </div>
    
    <link href="{{ asset('vendor/sendportal/build/assets/main.css') }}" rel="stylesheet">
@endsection
