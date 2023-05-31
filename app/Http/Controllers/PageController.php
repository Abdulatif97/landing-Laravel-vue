<?php

namespace App\Http\Controllers;

use App\Http\Resources\PageResource;
use App\Models\Page;
use Illuminate\Http\Request;

class PageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pages= PageResource::collection(Page::all());
        return response()->json($pages);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request ->validate([
            'slug'=>'required|unique:pages',
        ]);
        $page = Page::add($request->all());
        $page->uploadImage($request->file('image'));

        return response()->json([
            'message'=>'Page Created Successfully!!',
            'page'=>$page
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Page  $page
     * @return \Illuminate\Http\Response
     */
    public function show(Page $page)
    {
        $page = new PageResource($page);
        return response()->json($page);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Page  $page
     * @return \Illuminate\Http\Response
     */
    public function edit(Page $page)
    {
        $page = new PageResource($page);
        return response()->json($page);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Page  $page
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, Page $page)
    {
            $request ->validate([
                'slug'=>'required|unique:pages,slug,'.$page->id,
            ]);
            $page->edit($request->all());
            $page->uploadImage($request->file('image'));

            return response()->json([
                'message'=>'Page Updated Successfully!!',
                'page'=>$page
            ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Page  $page
     * @return \Illuminate\Http\Response
     */
    public function destroy(Page $page)
    {
        $page->remove();
        return response()->json([
            'message'=>'Page Deleted Successfully!!',
        ]);
    }
}
